import authservice from "../../services/authservice.js";
export const state = {
    user: null,
    loading: false,
    error: null,
};
export const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
};

export const actions = {
    async login(context, payload) {
        return authservice.login(payload);
    },
    async getAuthUser() {
        commit("SET_LOADING", true);
        try {
            const response = await authservice.getAuthUser();
            authuser = response.data.data;
            commit("SET_USER", authuser);
            return authuser;
        } catch (e) {
            commit("SET_ERROR", getError(error));
        } finally {
            commit("SET_LOADING", false);
        }
    },
};
