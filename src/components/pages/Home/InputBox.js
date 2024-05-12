import { Fab, Grid, Button, Paper, Avatar } from "@material-ui/core"
import React, { useContext, useState } from "react"
import { AuthContext } from "../../../context/authContext/authContext"
import BrokenImageIcon from "@material-ui/icons/BrokenImage"
import PollIcon from "@material-ui/icons/Poll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faFeather } from "@fortawesome/free-solid-svg-icons"
import { PostModal } from "../Modals/PostModal"
import { PostContext } from "../../../context/postContext/postContext"
import { BlogModal } from "../Modals/BlogModal"
import { BlogContext } from "../../../context/blogContext/BlogContext"
import { PollModal } from "../Modals/PollModal"
import { API } from "../../../utils/proxy"
import { PollContext } from "../../../context/pollContext/PollContext"
import { AdsContext } from "../../../context/adsContext/AdsContext"
import { AdsModal } from "../Modals/AdsModal"
import { ResourceContext } from "../../../context/resourcesContext/ResourceContext"
import { Highlight } from "@material-ui/icons"
import { IdeaModal } from "../Modals/IdeaModal"
import { IdeaContext } from "../../../context/ideaContext/IdeaContext"

export const InputBox = () => {
  const authContext = useContext(AuthContext)
  const postContext = useContext(PostContext)
  const blogContext = useContext(BlogContext)
  const pollContext = useContext(PollContext)
  const adsContext = useContext(AdsContext)
  const ideaContext = useContext(IdeaContext)
  const resourceContext = useContext(ResourceContext)
  const [showPost, setShowPost] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [showPoll, setShowPoll] = useState(false)
  const [showAds, setShowAds] = useState(false)
  const [showIdea, setShowIdea] = useState(false)

  const handleModalPoll = () => {
    setShowPoll(!showPoll)
  }
  const handleModalPost = () => {
    // console.log(showPost)
    setShowPost(!showPost)
  }
  const handleModalBlog = () => {
    // console.log(showBlog)
    setShowBlog(!showBlog)
  }
  const handleModalAds = () => {
    // console.log(showBlog)
    setShowAds(!showAds)
  }
  const handleModalIdea = () => {
    // console.log(showBlog)
    setShowIdea(!showIdea)
  }




  return (
    <>
      {showPost && (
        <PostModal
          show={showPost}
          handleModal={handleModalPost}
          postFunction={postContext.createPost}
          modalTitle="New Announcement"
          post={undefined}
        />
      )}
      {showBlog && (
        <BlogModal
          show={showBlog}
          handleModal={handleModalBlog}
          blogFunction={blogContext.createBlog}
          modalTitle="New Event"
          blog={undefined}
        />
      )}
      {showAds && (
        <AdsModal
          modalTitle="New resource"
          show={showAds}
          resourceFunction={resourceContext.createResource}
          ads={undefined}
          handleModal={handleModalAds}
        />
      )}
      {showPoll && (
        <PollModal
          modalTitle="New poll"
          show={showPoll}
          pollFunction={pollContext.createPoll}
          poll={undefined}
          handleModal={handleModalPoll}
        />
      )}

    {showIdea && (
        <IdeaModal
          modalTitle="New Idea"
          show={showIdea}
          ideaFunction={ideaContext.createIdea}
          idea={undefined}
          handleModal={handleModalIdea}
        />
      )}
      

      <Paper elevation={3} variant="elevation" className="p-3 mb-3">
        <Grid
          container
          justify="center"
          direction="row"
          spacing={6}
          alignItems="center"
        >
          <Grid item xs={1}>
            <Avatar
              alt={authContext.user.name}
              src={`${API}/pic/user/${authContext.user._id}`}
            />
          </Grid>
          <Grid item xs={10}>
            <Fab
              variant="extended"
              disabled
              style={{ width: "100%" }}
              size="medium"
            >
              {`Welcome back, ${authContext.user.name}`}
            </Fab>
          </Grid>
        </Grid>

        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="pt-2"
        >
          <Grid item>
            <Button
              onClick={handleModalPost}
              startIcon={<FontAwesomeIcon icon={faEdit} />}
            >
              New Announcement
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={handleModalBlog}
              startIcon={<FontAwesomeIcon icon={faFeather} />}
            >
              New Event
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleModalAds} startIcon={<BrokenImageIcon />}>
              Share Resource
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleModalPoll} startIcon={<PollIcon />}>
              Poll
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleModalIdea} startIcon={<Highlight />}>
              SUBMIT IDEAS
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
