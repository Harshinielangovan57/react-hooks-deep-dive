import React, { useEffect, useMemo, useState } from "react";

const UseMemoHook = ()=> {
  const [comments, setComments] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
//   const[currentComments, setCurrentComments] = useState([])

  const pageSize = 10


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
  }, [])

  const totalPages = Math.ceil(comments.length / pageSize)

  
    const currentComments = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        return comments.slice(startIndex, endIndex)
      }, [comments, currentPage, pageSize])
      console.log(currentComments)
    
    
//     useEffect(() => {
//    const startIndex = (currentPage - 1) * pageSize
//   const endIndex = startIndex + pageSize

//   const slicedData = comments.slice(startIndex, endIndex)
//   setCurrentComments(slicedData)

// }, [comments, currentPage])
//     console.log(currentComments)
    

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div >
      <h2>Comments Pagination</h2>

      {currentComments.map((comment) => (
        <div key={comment.id}>
          <p><b>{comment.email}</b></p>
          <p>{comment.body}</p>
        </div>
      ))}


      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>

        <span >
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UseMemoHook;