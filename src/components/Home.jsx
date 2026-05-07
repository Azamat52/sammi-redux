import React, { useEffect, useState } from 'react'
import Articles from '../services/Articles'
import { PulseLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { failLoading, startLoading, succedLoading } from '../slice/article'

function Home() {
  const [articles, setArticles] = useState("")
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.article.isLoading)

  useEffect(() => {
    const getArticles = async () => {
      dispatch(startLoading())
      try {
        const { articles } = await Articles.getArticle()
        setArticles(articles)
        dispatch(succedLoading())
      } catch (error) {
        dispatch(failLoading(error.textMessage))
      }
    }
    getArticles()
  }, [])
  return (
    <div className="py-4">
      {isLoading ? <div style={{width: "100%", textAlign: "center"}}><PulseLoader/></div> : (
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

                  <div className="card-footer d-flex gap-2">

                    <button className="btn btn-outline-primary w-100">
                      View
                    </button>

                    <button className="btn btn-outline-warning w-100">
                      Edit
                    </button>

                    <button className="btn btn-outline-danger w-100">
                      Delete
                    </button>

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
