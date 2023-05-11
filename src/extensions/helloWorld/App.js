if (!window.Dep) {
  class Dep {
    constructor(name) {
      this.id = new Date();
      this.subs = [];
    }
    defined() {
      Dep.watch.add(this);
    }
    notify() {
      this.subs.forEach((e, i) => {
        if (typeof e.update === 'function') {
          try {
            e.update.apply(e);
          } catch (err) {}
        }
      });
    }
  }
  Dep.watch = null;
  window.Dep = Dep;
}

if (!window.Watch) {
  class Watch {
    constructor(name, fn) {
      this.name = name;
      this.id = new Date();
      this.callBack = fn;
    }
    add(dep) {
      dep.subs.push(this);
    }
    update() {
      var cb = this.callBack;
      cb(this.name);
    }
  }
  window.Watch = Watch;

  var addHistoryMethod = (function () {
    var historyDep = new Dep();
    return function (name) {
      if (name === 'historychange') {
        return function (name, fn) {
          var event = new Watch(name, fn);
          Dep.watch = event;
          historyDep.defined();
          Dep.watch = null; //置空供下一个订阅者使用
        };
      } else if (name === 'pushState' || name === 'replaceState') {
        var method = history[name];
        return function () {
          method.apply(history, arguments);
          historyDep.notify();
        };
      }
    };
  })();
  window.addHistoryListener = addHistoryMethod('historychange');
}

history.pushState = addHistoryMethod('pushState');
history.replaceState = addHistoryMethod('replaceState');

function loadstyle() {
  //EMPTY
}
