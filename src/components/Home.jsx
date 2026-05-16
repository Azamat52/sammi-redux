import React, { use, useEffect, useState } from 'react'
import Articles from '../services/Articles'
import { PulseLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { failLoading, startLoading, succedLoading } from '../slice/article'
import { useNavigate, useParams, useRouteError } from 'react-router'

function Home() {
  const dispatch = useDispatch()
  const [parts, setParts] = useState("all")
  const { isLoading, articles } = useSelector((state) => state.article)
  const { loggedIn, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const getArticles = async () => {
    dispatch(startLoading())
    try {
      const { articles } = await Articles.getArticle()
      dispatch(succedLoading(articles))
    } catch (error) {
      dispatch(failLoading(error.textMessage))
    }
  }

  const deleteArticle = async (slug) => {
    try {
      await Articles.deleteArticle(slug)
      getArticles()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  useEffect(() => {
    if(!loggedIn){
      navigate("/registar")
    }
  }, [loggedIn])
  
  const filteredArticles = articles?.filter((article) => {
    if (parts === "all") return true;
    if (parts === "yours") return article.author.username === user.username;
    if (parts === "others") return article.author.username !== user.username;
    return false;
  });

  return (
    <div className="py-4 fade-page slide-top">
      {isLoading ? <div style={{ width: "100%", textAlign: "center" }}><PulseLoader /></div> : (
        <div>
          <h1>Articles</h1>
          {loggedIn && (
            <div>
              <button onClick={() => setParts("all")} className={parts === "all" ? "btns" : "un_active"}>All</button>
              <button onClick={() => setParts("yours")} className={parts === "yours" ? "btns" : "un_active"}>Yours</button>
              <button onClick={() => setParts("others")} className={parts === "others" ? "btns" : "un_active"}>Others</button>
            </div>)}
          <div className="row g-4">
            {filteredArticles?.map((article) => (
              <div className="col-md-4" key={article.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title text-capitalize">
                      {article.title}
                    </h5>

                    <p className="card-text text-muted">
                      {article.description}
                    </p>
                  </div>
                  <div className='absolute bottom-14 right-4'>
                    <p className='text-capitalize fw-bolder text-secondary m-0'>{article.author.username}</p>
                  </div>
                  <div className="card-footer d-flex gap-2">

                    <button className="btn btn-outline-primary w-100" onClick={() => navigate(`info/${article.slug}`)}>
                      View
                    </button>

                    {loggedIn && article.author.username === user.username ? (
                      <>
                        <button className="btn btn-outline-warning w-100" onClick={() => navigate(`/edit/${article.slug}`)}>
                          Edit
                        </button>

                        <button className="btn btn-outline-danger w-100" onClick={() => deleteArticle(article.slug)}>
                          Delete
                        </button>
                      </>
                    ) : null}

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
