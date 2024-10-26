"use client"
import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Youtube from '@tiptap/extension-youtube'
import NextImage from 'next/image'
import styles from "./write.module.css"

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    const addLink = () => {
        const url = window.prompt('Enter the URL:')
        if (url) {
            editor.chain().focus().setLink({ href: url }).run()
        }
    }

    return (
        <div className={styles.menuBar}>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`${styles.menuButton} ${editor.isActive('bold') ? styles.isActive : ''}`}
            >
                B
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`${styles.menuButton} ${editor.isActive('italic') ? styles.isActive : ''}`}
            >
                I
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`${styles.menuButton} ${editor.isActive('strike') ? styles.isActive : ''}`}
            >
                S
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`${styles.menuButton} ${editor.isActive('heading', { level: 1 }) ? styles.isActive : ''}`}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`${styles.menuButton} ${editor.isActive('heading', { level: 2 }) ? styles.isActive : ''}`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${styles.menuButton} ${editor.isActive('bulletList') ? styles.isActive : ''}`}
            >
                • List
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${styles.menuButton} ${editor.isActive('orderedList') ? styles.isActive : ''}`}
            >
                1. List
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${styles.menuButton} ${editor.isActive('blockquote') ? styles.isActive : ''}`}
            >
                Quote
            </button>
            <button
                onClick={addLink}
                className={`${styles.menuButton} ${editor.isActive('link') ? styles.isActive : ''}`}
            >
                Link
            </button>
            <button
                onClick={() => editor.chain().focus().unsetLink().run()}
                className={styles.menuButton}
                disabled={!editor.isActive('link')}
            >
                Unlink
            </button>
        </div>
    )
}

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false,
                linkOnPaste: true,
            }),
            Youtube.configure({
                controls: true,
            }),
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },
        },
    })

    const addImage = () => {
        const url = window.prompt('Enter the URL of the image:')
        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const addVideo = () => {
        const url = window.prompt('Enter YouTube URL:')
        if (url && editor) {
            editor.chain().focus().setYoutubeVideo({
                src: url,
                width: 640,
                height: 480,
            }).run()
        }
    }

    return (
        <div className={styles.container}>
           <button className={styles.btn}>Publish</button>
            <input 
                type="text" 
                placeholder='Title' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
            />
            <div className={styles.editor}>
                <button 
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    <NextImage src="/plus.png" alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button 
                            className={styles.addButton}
                            onClick={addImage}
                        >
                            <NextImage src="/image.png" alt='' width={16} height={16} />
                        </button>
                        <button 
                            className={styles.addButton}
                            onClick={addVideo}
                        >
                            <NextImage src="/video.png" alt='' width={16} height={16} />
                        </button>
                    </div>
                )}
                <div className={styles.textEditor}>
                    <MenuBar editor={editor} />
                    <EditorContent editor={editor} />
                </div>
            </div>
           
        </div>
    )
}

export default WritePage