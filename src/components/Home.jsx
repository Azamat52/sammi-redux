import React, { useEffect, useState } from 'react'
import Articles from '../services/Articles'
import { PulseLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { failLoading, startLoading, succedLoading } from '../slice/article'
import { useNavigate } from 'react-router'

function Home() {
  const dispatch = useDispatch()
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

  return (
    <div className="py-4">
      {isLoading ? <div style={{ width: "100%", textAlign: "center" }}><PulseLoader /></div> : (
        <div>
          <h1>Aticles</h1>
          <div className="row g-4">
            {articles && articles.map((article) => (
              <div className="col-md-4" key={article.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">
                      {article.title}
                    </h5>

                    <p className="card-text text-muted">
                      {article.description}
                    </p>
                  </div>
                  <div className='absalute w-99 text-right'>
                    <p className='text-capitalize fw-bolder text-secondary'>{article.author.username}</p>
                  </div>
                  <div className="card-footer d-flex gap-2">

                    <button className="btn btn-outline-primary w-100">
                      View
                    </button>

                    {loggedIn && article.author.username === user.username ? (
                      <>
                        <button className="btn btn-outline-warning w-100" onClick={() => navigat$e("/edit")}>
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
