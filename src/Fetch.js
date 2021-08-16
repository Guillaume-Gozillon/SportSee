import { useEffect, useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()

      //console.log(data.data)

      setData(data.data)
    }
    fetchData()
  }, [url])

  return data
}

export default useFetch
