import styled from "styled-components"
import { BiLinkExternal } from "react-icons/bi"

const PlaylistLink = () => {
  return (
    <PlaylistWrapper
      href="https://www.youtube.com/playlist?list=PL46OmH9YaCl9Yw7dMSN69sMyXUFcuOfRb"
      target="_blank"
    >
      <div>YouTube Playlist s riešeniami niektorých testov</div>
      <div>
        <BiLinkExternal size="1.3rem" />
      </div>
    </PlaylistWrapper>
  )
}

const PlaylistWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: #c00;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 0.35rem;
  transition: 0.2s all ease;

  &:hover,
  &:focus {
    background-color: #ff2d2d;
  }
`

export default PlaylistLink
