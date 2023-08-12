"use client"

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

function PromptCard({post, handleTagClick, handleEdit, handleDelete, handleClickRemove}) {

  const [copied, setCopied] = useState('');
  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter(); 

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 2000)
  };

  const handleClickAdd = (promptID) => {
    router.push(`/add-to-list/${promptID}`)
  }
  
  return (
    <div className="prompt_card mb-5">
      <div className="flex justify-between items-start gap-5"
        onClick={() => router.push(`/profile/${post.creator._id}`)}
      >
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            alt="userImg"
            src={post.creator.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
              </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
              </p>
          </div>
        </div>
      <div className="copy_btn" onClick={handleCopy}>
        <Image src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
          width={12}
          height={12}
          alt="img"
        />
      </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-200 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          > Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >Delete
          </p>
          {!post.list && (
            <p
            className="font-inter text-sm lightblue_gradient cursor-pointer mr-5"
            onClick={() => handleClickAdd && handleClickAdd(post._id)}
          >Add to list
          </p>
          )}
        </div>
      )}
      {session?.user.id && pathName === "/" && !post.list && (
          <p
            className="flex justify-end font-inter text-sm border-t border-gray-200 pt-3 lightblue_gradient cursor-pointer mr-5"
            onClick={() => handleClickAdd && handleClickAdd(post._id)}
          >Add to list
          </p>
      )}
      {session?.user.id && pathName === "/lists" && post.list && (
          <p
            className="flex justify-end font-inter text-sm border-t border-gray-200 pt-3 text-gray-400/75 hover:text-gray-500 cursor-pointer mr-5"
            onClick={() => handleClickRemove && handleClickRemove(post._id)}
          >Remove from list
          </p>
      )}
    </div>
  )
}

export default PromptCard;