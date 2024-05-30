import React, { useContext, useEffect, useState } from "react"
import { Home } from "../../../common/Base/Home"
import { IdeaContext } from "../../../../context/ideaContext/IdeaContext"
import { LoadingIdea } from "./LoadingIdea"
//import { IdeaCard } from "./IdeaCard"
import { Grid, Icon, IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../../../../context/userContext/UserContext"
import { Add, PlusOne } from "@material-ui/icons"
import { IdeaModal } from "../../Modals/IdeaModal"
import { IdeaCard } from "./IdeaCard"

export const Idea = () => {
  const ideaContext = useContext(IdeaContext)
  const userContext = useContext(UserContext)
  const [showIdea, setShowIdea] = useState(false)
  useEffect(() => {
    ideaContext.getAllIdeas()
    //alert(IdeaContext.Idea)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Home>
      {showIdea && (
        <IdeaModal
          modalTitle="New Idea"
          show={showIdea}
          ideaFunction={ideaContext.createIdea}
          idea={undefined}
          handleModal={() => setShowIdea(false)}
        />
      )}

      <div className="">
        New Idea
        <IconButton onClick={() => setShowIdea(true)} className="fa-plus">
          <Add/>
        </IconButton>  
      </div>
      <div className="px-2">
        {ideaContext.loading || userContext.loading ? (
          <LoadingIdea />
        ) : ideaContext.idea.length > 0 ? (
          ideaContext.idea.map((idea) => {
            // console.log(IdeaContext.Idea)
            return (
              <div key={idea._id}>
                <IdeaCard idea={idea} />
              </div>
            )
          })
        ) : (
          <div
            className="m-auto"
            style={{
              height: "30vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid className=""
              container
              spacing={3}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <FontAwesomeIcon icon={faPencilAlt} fontSize="large" />
              <h6 className="mt-2">No Idea out there</h6>
            </Grid>
          </div>
        )}
      </div>
    </Home>
  )
}
