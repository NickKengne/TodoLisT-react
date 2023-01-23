import React from 'react'

export default function Card({tache, description, deleteTache, index}) {
  return (
    <div className='Card has-background-link my-4'>
        <div className="card-content is-relative">
            <div className="content">
                <h4 className='title is-size-5'>{tache}</h4>
                <p className="px-4 has-text-white">{description}</p>
                <button className="delete btn-top" onClick={() => deleteTache(index)}></button>
            </div>
        </div>
    </div>
  )
}
