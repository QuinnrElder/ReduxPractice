import {ADD_TODO} from "./actions"

import {takeEvery} from '@redux-saga/core/effects'

export function* addTodo() {
  yield takeEvery(ADD_TODO, function*() {
    // blah blah blah
  })
} 

export default function*() {
  yield* addTodo() 
}
