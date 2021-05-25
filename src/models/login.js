// import axios from "@/utils/request";

// const SERVICE = "/dcp-admin-sys/api/v1";

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    saveAccessToken(state, { payload }) {
      sessionStorage.setItem("admin-token", payload.data.accessToken || "");
    },
  },
  actions: {
    // queryLoginToken({ commit }, { payload, onSuccess, onFailed }) {
    //   axios({
    //     method: "post",
    //     url: `${SERVICE}/login/login-tokens`,
    //     data: payload,
    //   })
    //     .then((res) => {
    //       onSuccess && onSuccess(res);
    //     })
    //     .catch((err) => {
    //       onFailed && onFailed(err);
    //     });
    // },
    // getCaptcha({ state }, { payload, onSuccess, onFailed }) {
    //   axios({
    //     method: "get",
    //     url: `${SERVICE}/login/captcha?captchaType=1`,
    //     responseType: "blob",
    //   })
    //     .then((res) => {
    //       onSuccess && onSuccess(res);
    //     })
    //     .catch((err) => {
    //       onFailed && onFailed(err);
    //     });
    // },
    // getSmsVerificationCode({ state }, { payload, onSuccess, onFailed }) {
    //   axios({
    //     method: "post",
    //     url: `${SERVICE}/login/sms-otps`,
    //     data: payload,
    //   })
    //     .then((res) => {
    //       onSuccess && onSuccess(res);
    //     })
    //     .catch((err) => {
    //       onFailed && onFailed(err);
    //     });
    // },
    // queryAccessToken({ commit }, { payload, onSuccess, onFailed }) {
    //   axios({
    //     method: "post",
    //     url: `${SERVICE}/login/access-tokens`,
    //     data: payload,
    //   })
    //     .then((res) => {
    //       onSuccess && onSuccess(res);
    //       commit && commit({
    //         type: 'saveAccessToken',
    //         payload: res
    //       });
    //     })
    //     .catch((err) => {
    //       onFailed && onFailed(err);
    //     });
    // },
  },
};
