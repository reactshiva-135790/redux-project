import {configureStore} from "@reduxjs/toolkit";

import counterReducer  from "./feature/couterSlice";

export default configureStore({
    reducer : {
      counter : counterReducer,
    }
})