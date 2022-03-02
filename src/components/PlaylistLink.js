import { BiLinkExternal } from "react-icons/bi"

const PlaylistLink = () => {
  return (
    <a
      href="https://www.youtube.com/playlist?list=PL46OmH9YaCl9Yw7dMSN69sMyXUFcuOfRb"
      target="_blank"
    >
      <div>YouTube Playlist s riešeniami niektorých testov</div>
      <div>
        <BiLinkExternal size="1.3rem" />
      </div>
    </a>
  )
}

export default PlaylistLink
