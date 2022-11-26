import { Component, createSignal } from 'solid-js';

const InputField: Component = () => {
  const [text, setText] = createSignal('')

  return (
    <>
      <input onInput={e => setText(e.currentTarget.value)} />
      <div>
        <p>Debug: {text}</p>
      </div>
    </>
  )
}

export default InputField;