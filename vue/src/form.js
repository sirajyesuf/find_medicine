class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];

            return;
        }
    }
    add(field, error) {
        this.errors[field] = error;
    }
}

class Message {
    constructor() {
        this.message = {};
    }
    record(message) {
        this.message = message;
    }
    get() {
        return this.message.message;
    }
    clear() {
        delete this.message;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
        this.message = new Message();
    }

    data() {
        let data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = "";
        }
    }

    async submit(func) {
        return func(this.data())
            .then(await this.onSuccess.bind(this))
            .catch(await this.onFail.bind(this));
    }

    async onSuccess(response) {
        this.errors.clear();
        this.reset();
        this.message.record(response.data);
        return Promise.resolve(response);
    }

    async onFail(error) {
        this.errors.record(error.response.data.errors);
        return Promise.reject(error);
    }
}

export default Form;
