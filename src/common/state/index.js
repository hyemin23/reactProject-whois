
//enum 형식으로 사용할 변수 대문자로 시작

import { createReducer, createSetValueAction, setValueReducer } from "../redux-helper";

//action Types.
export const Types = {
    SetValue: "search/SetValue",

    //Api 통신을 위한 auto complete 추가
    //모든 Api 통신을 위한 것은 "Fetch" 로 작성
    FetchAutoComplete: "search/FetchAutoComplete",
};

//action 생성자 함수
export const actions = {
    setValue: createSetValueAction(Types.SetValue)
    , FetchAutoComplete: keyword => ({
        type: Types.FetchAutoComplete
        , keyword
    }),
}

//초기 값
const INITIAL_STATE = {
    keyword: ""
    , autoCompletes: [],
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue]: setValueReducer
});

export default reducer;
