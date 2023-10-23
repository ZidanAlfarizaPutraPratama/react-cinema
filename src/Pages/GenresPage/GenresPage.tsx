/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { GetDataAxios } from '../../Library/Axios/Axios'

const GenresPage = () => {
    const [data, setData] = useState<any[]>([]);
    const getDataGenres = async () => {
        const result = await GetDataAxios("genre");
        setData(result.data);
    }

    useEffect(() => {
        getDataGenres();
    },[]);
  return (
    <>
        <h3>Genres</h3>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th className='text-center'>No</th>
                    <th className='text-center'>Genre ID</th>
                    <th className='text-center'>Genre</th>
                    <th className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className='text-center'>{index + 1}</td>
                                <td className='text-center'>{el.genre_id}</td>
                                <td className='text-center'>{el.name}</td>
                                <td className='d-flex justify-content-center'>
                                    <button className="btn btn-danger m-2">Hapus Data</button>
                                    <button className="btn btn-warning m-2">Edit Data</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default GenresPage