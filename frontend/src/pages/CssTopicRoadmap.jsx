import { useParams, Link } from "react-router-dom"
import cssLearningPath from "../data/cssLearningPath"

export default function CssTopicRoadmap() {
  const { topicId } = useParams()
  const topic = cssLearningPath.topics.find(t => t.id === topicId)

  if (!topic) {
    return <p className="p-10">Topic not found</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 p-4 md:p-10">
        <Link
          to="/css"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4 transition-colors"
        >
          <span className="mr-2">&lt;-</span> Back to CSS Fundamentals
        </Link>

        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm dark:shadow-none p-5 md:p-8 transition-colors">
          <h1 className="mb-2 md:mb-3 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">{topic.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">{topic.shortDescription}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-200 transition-colors">Subtopics</h2>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topic.subtopics.map(subtopic => {
              return (
                <Link
                  key={subtopic.id}
                  to={`/css/${topicId}/${subtopic.id}`}
                  className="rounded-xl border p-4 md:p-5 text-left transition-colors border-gray-200 bg-white shadow-sm hover:border-cyan-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40 dark:shadow-none dark:hover:border-cyan-600 dark:hover:bg-gray-800/70"
                >
                  <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                    {subtopic.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-snug text-gray-600 dark:text-gray-300 transition-colors">
                    Click to view detailed explanation and code examples
                  </p>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
