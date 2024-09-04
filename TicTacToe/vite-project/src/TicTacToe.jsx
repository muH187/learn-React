import React from 'react'

const TicTacToe = () => {
  return (
    <div className='container text-center'>
        <h1 className='text-4xl text-slate-300 font-semibold font-serif'>Tic-Tac-Toe</h1>
      <div className='board flex m-auto w-[564px] h-[600px] mt-10'>
            <div className="row1">
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
            </div>
            <div className="row2">
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
            </div>
            <div className="row3">
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
                <div className="boxes w-[180px] h-[180px] bg-[#1f3540] border-4 border-[#708090] cursor-pointer rounded-lg flex"></div>
            </div>
      </div>
      <button className='bg-slate-800 text-slate-300 hover:bg-slate-400 transition ease-in-out delay-50 py-2 px-5 rounded-xl font-semibold text-xl shadow-2xl'>Reset</button>
    </div>
  )
}

export default TicTacToe
