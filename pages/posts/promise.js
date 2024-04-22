const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        this.onResolvedCallbacks.forEach((fn) => fn())
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }
    executor(resolve, reject)
  }

  then(onFulFilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulFilled && onFulFilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected && onRejected(this.reason)
    }
  }
}

module.exports = Promise

// 面试官：如果是异步调用resovle或者reject呢

// https://juejin.cn/post/7269640045043777576?searchId=2024041815403503DA52A105D112A24D97
