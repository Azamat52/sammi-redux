import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { failGetDetail, startGetDetail, succedGetDetail } from '../slice/article'
import Articles from '../services/Articles'
import { useNavigate, useParams } from 'react-router'

function ArticleInfo() {
    const { articleDetail } = useSelector((state) => state.article)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        const getArticleDetails = async () => {
            dispatch(startGetDetail())
            try {
                const { article } = await Articles.getArticleDetail(slug)
                dispatch(succedGetDetail(article))
            } catch (error) {
                dispatch(failGetDetail(error.textMessage))
            }
        }
        getArticleDetails()
    }, [])

    return (
        <div>
            {articleDetail && (
                <div className="container py-5 fade-page">
                    <div className="mx-auto" style={{ maxWidth: "900px" }}>

                        <button className="btn btn-outline-primary w-40 slide-top " onClick={() => navigate("/")}><i className="fa-solid fa-arrow-left mx-2"></i>Go back</button>

                        {/* TITLE */}
                        <h1 className="display-3 fw-bold mb-3 text-dark text-capitalize slide-top">
                            {articleDetail.title}
                        </h1>

                        {/* DESCRIPTION */}
                        <p
                            className="fs-4 text-secondary mb-5 slide-top delay-1"
                            style={{ lineHeight: "1.8" }}
                        >
                            {articleDetail.description}
                        </p>

                        {/* AUTHOR CARD */}
                        <div
                            className="card border-0 shadow-lg mb-5 overflow-hidden author-card slide-top delay-2"
                            style={{ borderRadius: "20px" }}
                        >
                            <div className="card-body p-4">

                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">

                                    {/* LEFT */}
                                    <div className="d-flex align-items-center gap-3">

                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold avatar-animation"
                                            style={{
                                                width: "75px",
                                                height: "75px",
                                                fontSize: "28px",
                                                background:
                                                    "linear-gradient(135deg, #0d6efd, #6610f2)"
                                            }}
                                        >
                                            {articleDetail.author.username[0].toUpperCase()}
                                        </div>

                                        <div>
                                            <h4 className="fw-bold mb-1 text-capitalize">
                                                {articleDetail.author.username}
                                            </h4>

                                            <p className="text-secondary mb-0">
                                                {articleDetail.author.bio || "Frontend Developer"}
                                            </p>
                                        </div>

                                    </div>

                                    {/* RIGHT */}
                                    <div className="text-md-end">

                                        <div className="mb-2">
                                            <span className="badge bg-primary-subtle text-primary px-3 py-2">
                                                Created:{" "}
                                                {new Date(
                                                    articleDetail.createdAt
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="badge bg-dark-subtle text-dark px-3 py-2">
                                                Updated:{" "}
                                                {new Date(
                                                    articleDetail.updatedAt
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* BODY */}
                        <div
                            className="bg-white shadow-sm p-4 p-md-5 article-body slide-top delay-3"
                            style={{
                                borderRadius: "18px",
                                lineHeight: "2",
                                fontSize: "19px",
                                whiteSpace: "pre-line"
                            }}
                        >
                            {articleDetail.body}
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default ArticleInfo
