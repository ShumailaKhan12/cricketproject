"use client"

import { useParams } from "next/navigation";

const page = ():any => {
  const params = useParams()
  return (
    <div><h1>Student Detail</h1>
    <h1>Name : {params.details}</h1>
    </div>
  )
}

export default page