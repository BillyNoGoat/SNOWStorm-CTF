const axios = require("axios");

class SNService {
    // Challenge 1
    static async c1GetTickets(params) {
        
        try {
            // const res = await axios.get("http://localhost:3010/challenge/1/gettickets/vue", {params});
            const res = await $axios.$get("/challenge/1/gettickets/vue", {params});
            const data = res.data;
            console.log(data);
            return data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async c2GetTickets(params) {
        try {
            const res = await axios.get("http://localhost:3010/challenge/2/gettickets/vue", {params});
            const data = res.data;
            // console.log(data);
            return data;
        } catch (e) {
            return e;
        }
    }


}

export default SNService;