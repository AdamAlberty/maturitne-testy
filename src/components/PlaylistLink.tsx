import { BiLinkExternal } from "react-icons/bi"

const PlaylistLink = () => {
  return (
    <a
      className="mt-2 flex items-center justify-between rounded-md border-2 border-gray-400 bg-blue-600 p-4 font-display hover:bg-blue-500"
      href="https://www.youtube.com/playlist?list=PL46OmH9YaCl9Yw7dMSN69sMyXUFcuOfRb"
      target="_blank"
      rel="noreferrer"
    >
      <div>YouTube Playlist s riešeniami niektorých testov</div>
      <div>
        <BiLinkExternal size="1.3rem" />
      </div>
    </a>
  )
}

export default PlaylistLink
