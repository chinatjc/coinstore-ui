### 介绍

`CSSTransition` 组件的 props 全部继承自 `Transition` 组件。

`CSSTransition` 组件利用一组 `css` 实现动画。

### classNames

```ts
string | {
  appear?: string,
  appearActive?: string,
  appearDone?: string,
  enter?: string,
  enterActive?: string,
  enterDone?: string,
  exit?: string,
  exitActive?: string,
  exitDone?: string,
}
```

上面两种传参类型的区别在于：是否自动生成 `css-class` 。

例如：`classNames="fade"`

```jsx
classNames={{
  appear: 'fade-appear',
  appearActive: 'fade-active-appear',
  appearDone: 'fade-done-appear',
  enter: 'fade-enter',
  enterActive: 'fade-active-enter',
  enterDone: 'fade-done-enter',
  exit: 'fade-exit',
  exitActive: 'fade-active-exit',
  exitDone: 'fade-done-exit',
}}
```

#### 各个状态下的 `css-class` 应用情况

1. appear

appear => appear appearActive => appearDone enterDone

2. exit

exit => exit exitActive => exitDone

3. enter

enter => enter enterActive => enterDone
