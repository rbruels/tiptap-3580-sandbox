import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import './Editor.css';
import Extension from './Extension';
import { useEffect } from 'react';

export default function Editor() {

  const editor = useEditor({
    extensions: [StarterKit, Extension],
    content: '',
  });

  useEffect(() => {
    const html = `
      <p>
        Paragraph!
      </p>
      <p>
        Another paragraph!
      </p>
      <content-block></content-block>
    `;
    // Uncommenting this setTimeout seems to make it work w/o errors
    //setTimeout(() => {
      editor?.commands.setContent(html);
    //});
  }, [editor]);

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
