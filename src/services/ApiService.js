import axios from "axios";

const qs = require("querystring");
const apiClient = axios.create({
  baseURL: "http://merchant.jolzatra.com/api/v2/",
  // baseURL: "http://jolzatra.itracker71.com/api/v1/",
  withCredentials: false,
  crossDomain: true,
  crossdomain: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (Array.isArray(param)) {
        for (const p of param) {
          searchParams.append(key, p);
        }
      } else {
        searchParams.append(key, param);
      }
    }
    return searchParams.toString();
  }
});

apiClient.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default {
  DownloadLink(payload) {
    return apiClient.post("/download/link", qs.stringify(payload))
  },
  deleteNotification(payload) {
    return apiClient.post("/my/notifications/read", qs.stringify(payload))
  },
  Login(credentials) {
    return apiClient.post(
      "/auth/login",
      qs.stringify({
        email: credentials.email,
        mobile: credentials.mobile,
        password: credentials.password,
        device_id: "sdkfjdlksfjdsf"
      })
    )
  },
  Check(payload) {
    return apiClient.post(
      "/auth/check",
      qs.stringify({
        mobile: payload.mobile
      })
    )
  },
  Verify(payload) {
    return apiClient.post(
      "/auth/verify",
      qs.stringify(payload)
    )
  },
  CheckPNR(payload) {
    return apiClient.get(
      "/booking/check/" + payload.pnr
    )
  },
  Register(payload) {
    return apiClient.post(
      "/auth/register",
      qs.stringify(payload)
    )
  },
  Forgot(payload) {
    return apiClient.post(
      "/auth/forgot",
      qs.stringify(payload)
    )
  },
  ResendCode(payload) {
    return apiClient.post("/auth/otp/resend", qs.stringify(payload))
  },
  Reset(payload) {
    return apiClient.post(
      "/auth/reset",
      qs.stringify(payload)
    )
  },
  addCart(payload) {
    return apiClient.post("/cart/add",
      qs.stringify({item_id: payload.item.cabin_id, trip_id: payload.item.trip_id, customer_token: payload.token})
    )
  },
  removCart(payload) {
    return apiClient.post("/cart/remove",
      qs.stringify({item_id: payload.item.cabin_id, trip_id: payload.item.trip_id, index: payload.index, customer_token: payload.token})
    )
  },
  validateCoupon(payload) {
    return apiClient.post("/coupon/validate",
      qs.stringify({items: payload.items, coupon: payload.code})
    )
  },
  logout() {
    return apiClient.post("/auth/logout")
  },
  getProfile() {
    return apiClient.get("/profile");
  },
  init() {
    return apiClient.get("/site/init");
  },
  expertHelp(payload) {
    return apiClient.post("/support/send", qs.stringify(payload))
  },
  search(credentials) {
    // return apiClient.get("/search?trip_date=2020-12-03");
    return apiClient.get("available", {
      params: credentials
    })
  },
  view(params) {
    return apiClient.get("trip/" + params.id, {
      params: params
    });
  },
  suggestion(form, field) {
    var term = form.trip_from
    var acception = form.trip_to
    if( field === 'to' ) {
      term = form.trip_to
      acception = form.trip_from
    }
    return apiClient.get("suggest/" + term + "/" + acception)
  },
  confirmOrder(payload, user) {
    return apiClient.post(
      "order/confirm",
      qs.stringify({
        items: payload.items,
        customer_id: payload.user.id,
        coupon: payload.coupon,
        platform: 'web'
      })
    )
  },
  cancelBooking(payload) {
    return apiClient.post(
      "booking/cancel",
      qs.stringify(payload)
    )
  },
  makePayment(payload) {
    return apiClient.post(
      "order/payment",
      qs.stringify(payload)
    )
  },
  uploadProfile(payload) {
    return apiClient.post("/my/profile/upload",
      qs.stringify(payload)
    )
  },
  updateProfile(payload) {
    return apiClient.post("/my/profile/update",
      qs.stringify({name: payload.name})
    )
  },
  changeEmail(payload) {
    return apiClient.post("/my/email/change",
      qs.stringify({email: payload.email})
    )
  },
  changeMobile(payload) {
    return apiClient.post("/my/mobile/change",
      qs.stringify({mobile: payload.mobile})
    )
  },
  getPage(payload) {
    return apiClient.get("page/" + payload)
  },
  getMyBookings(payload) {
    return apiClient.get("my/bookings", {
      params: payload
    })
  },
  getMyActivities(payload) {
    return apiClient.get("my/activities", {
      params: payload
    })
  },
  getMyNotifications(payload) {
    return apiClient.get("my/notifications", {
      params: payload
    })
  },
  getMyBooking(id)
  {
    return apiClient.get('my/booking/' + id)
  },
  getMyCancellations(payload) {
    const searchParams = new URLSearchParams();
    if( payload.page ) {
      searchParams.append('page', payload.page)
    }
    if( payload.date_from ) {
      searchParams.append('date_from', payload.date_from)
    }
    if( payload.date_to ) {
      searchParams.append('date_to', payload.date_to)
    }
    return apiClient.get("my/cancellations?" + searchParams.toString())
  },
  getMyJournies(payload) {
    return apiClient.get("my/journey?page=" + payload.page)
  },
  getMyJourney(id)
  {
    return apiClient.get('my/journey/' + id)
  }
};
