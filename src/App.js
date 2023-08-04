import Editor from './Editor';

function App() {
  return (
    <div>
      <div>
        <h3>Relevant Issues</h3>
        <ul>
          <li><a href="https://github.com/ueberdosis/tiptap/issues/3764">tiptap/issues/3764</a></li>
          <li><a href="https://github.com/ueberdosis/tiptap/issues/3580">tiptap/issues/3580</a></li>
        </ul>
      </div>
      <h3>Editor</h3>
      <Editor />
    </div>
  );
}

export default App;
