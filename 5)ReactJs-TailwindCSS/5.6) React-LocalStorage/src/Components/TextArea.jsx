const TextArea = (el) => {
  return (
  <textarea value={el.state} onChange={el.onChange} className="px-[1rem] py-[0.5rem] resize-none resize: vertical" required placeholder={el.placeholder}>
  </textarea>
  )
}

export default TextArea
