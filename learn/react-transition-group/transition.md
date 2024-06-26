### Transition states

`Transition` 组件有4个主要的状态： `entering`, `entered`, `exiting`, `exited`

### nodeRef

nodeRef引用：执行动画的根元素的原生DOM节点

```ts
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${String(duration)}ms ease-in-out`,
  opacity: '0',
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

function Fade() {
  const [inProp] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={300}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {`I'm a fade Transition!`}
        </div>
      )}
    </Transition>
  );
}

export default Fade;
```

### appear

是否在初次进入添加 `entering` 动画（需要和in同时为true）

> 默认情况下：当 `in` 为 `true` 时，没有动画过程，状态直接变为 `entered` 。

### timeout

每个状态下的动画执行时间，单位`ms`。

```ts
number | { enter?: number, exit?: number, appear?: number }
```

### addEndListener

当在执行动画根元素上添加状态过渡值 `transition-duration` ，同样还需要设置在 `timeout` 参数上设置同样的过渡时间。同一个时间值设置两遍，不仅繁琐，还会增加维护的成本。为此，可以通过设置 `addEndListener` 解决这一问题。

`addEndListener` - 自定义 transition 结束的触发器。

```ts
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${String(duration)}ms ease-in-out`,
  opacity: '0',
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

function Fade() {
  const [inProp] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Transition
      nodeRef={nodeRef}
      in={inProp}
      addEndListener={(done) => {
        if (nodeRef.current) {
          /** 当 nodeRef.current 过渡动画结束时，自动执行 done 函数，结束这一阶段的动画状态  */
          nodeRef.current.addEventListener('transitionend', done, false);
        }
      }}
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {`I'm a fade Transition!`}
        </div>
      )}
    </Transition>
  );
}

export default Fade;
```

### onEnter / onEntering / onEntered

- onEnter： 在动画状态变为 `entering` 之前调用。

- onEntering： 在动画状态变为 `entering` 之后调用。

- onEntered： 在动画状态变为 `entered` 之后调用。

```ts
/**
 * isAppearing 指是否是"首次挂载"
 */

(node: HtmlElement, isAppearing: bool) => void
(isAppearing: bool) => void
```

> 当提供了nodeRef属性值时，这里的函数并不会传递node

### onExit / onExiting / onExited

- onExit 在动画状态变为 `exiting` 之前调用。

- onExiting 在动画状态变为 `exiting` 之后调用。

- onExited 在动画状态变为 `exited` 之后调用。

```ts
(node: HtmlElement) => void
() => void
```

> 当提供了nodeRef属性值时，这里的函数并不会传递node
