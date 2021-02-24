
import React from 'react';
import produce from 'immer';

//공통 리듀서 생성하는 곳
export function createReducer(init, handlerMap) {
    return function (state = init, action) {
        //handlerMap[action.type] = function ?
        const handler = handlerMap[action.type];
        console.log("handler : ", handler);
        console.log("handler  type : ", typeof handler);

        if (handler) {
            //produce
            //첫 번째 인자 : 현재 state
            //두 번째 인자 : 변경할 state를 대입하는 value
            return produce(state, draft => {
                console.log("state와 draft", state, draft);


                const handler = handlerMap[action.type];

                //여기서의 draft는 변경할 state 값인가?
                //최종적으로 해당 handler 함수로 (변경state,action) 전달
                handler(draft, action);
            });
        } else {
            return state;
        }

    }
}


export function createSetValueAction(type) {
    return (key, value) => ({ type, key, value });
}

export function setValueReducer(state, action) {
    state[action.key] = action.value;
}