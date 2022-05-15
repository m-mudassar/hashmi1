import Link from 'next/link'
import React, { useState } from 'react'

const madicines = [
  {
    id: 1,
    name: 'Hashmi Chilka',
    chemical: 'Chilka',
    dosage: '1/2 kg',
    price: 'Rs. 100',
    expiry: '20/12/2024',
  },
  {
    id: 2,
    name: 'Hashmi Chilka2',
    chemical: 'Chilka2',
    dosage: '1/3 kg',
    price: 'Rs. 150',
    expiry: '20/12/2025',
  },
]

function AddMadicine() {
  const [madicineName, setMadicineName] = useState('')
  const [madicineChemical, setMadicineChemical] = useState('')
  const [madicineDosage, setMadicineDosage] = useState('')
  const [madicinePrice, setMadicinePrice] = useState(0)
  const [madicineExpiry, setMadicineExpiry] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={
          success
            ? 'items-center bg-green-600 p-5 leading-none text-red-100 lg:inline-flex lg:rounded-lg'
            : 'hidden'
        }
        role="alert"
      >
        <span className="mr-2 flex-auto text-left font-semibold">
          Login Success ...
        </span>
      </div>

      <div
        className={
          error
            ? 'items-center bg-red-800 p-5 leading-none text-red-100 lg:inline-flex lg:rounded-lg'
            : 'hidden'
        }
        role="alert"
      >
        <span className="mr-2 flex-auto text-left font-semibold">
          Invalid email Or password
        </span>
      </div>

      <div className="rounded-lg bg-white">
        <h1 className="border-b-2 py-5 text-center text-3xl font-semibold">
          Add Madicine
        </h1>

        <div className="flex flex-col space-y-4 px-10">
          <div className="flex flex-col space-y-5 pt-5">
            <div>
              <input
                type="text"
                name="madicineName"
                placeholder="Madicine Name"
                onChange={(e) => {
                  setMadicineName(e.target.value)
                  setError(false)
                  setSuccess(false)
                }}
                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
              />{' '}
              <br />
            </div>
            <div>
              <input
                type="text"
                placeholder="Madicine Chemical"
                onChange={(e) => {
                  setMadicineChemical(e.target.value)
                  setError(false)
                  setSuccess(false)
                }}
                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
                name="madicineChemical"
              />{' '}
              <br />
            </div>
            <div>
              <input
                type="text"
                placeholder="Madicine Dosage"
                onChange={(e) => {
                  setMadicineDosage(e.target.value)
                  setError(false)
                  setSuccess(false)
                }}
                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
                name="madicineDosage"
              />{' '}
              <br />
            </div>
            <div>
              <input
                type="number"
                min="1"
                step="any"
                placeholder="Madicine Price"
                onChange={(e) => {
                  setMadicineDosage(e.target.value)
                  setError(false)
                  setSuccess(false)
                }}
                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
                name="madicineDosage"
              />{' '}
              <br />
            </div>
            <div>
              <input
                type="date"
                placeholder="Madicine Price"
                onChange={(e) => {
                  setMadicineDosage(e.target.value)
                  setError(false)
                  setSuccess(false)
                }}
                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
                name="madicineDosage"
              />{' '}
              <br />
            </div>
          </div>

          <button
            type="submit"
            onClick={async () => {
              validateForm(
                madicineName,
                madicineChemical,
                madicineDosage,
                madicinePrice,
                madicineExpiry
              )
                ? (await addMadicine(
                    madicineName,
                    madicineChemical,
                    madicineDosage,
                    madicinePrice,
                    madicineExpiry
                  ))
                  ? (setSuccess(true), setError(false))
                  : (setSuccess(false), setError(true))
                : (setError(true), setSuccess(false))
            }}
            className="rounded-full bg-green-500 text-center hover:bg-green-600"
          >
            <div className="p-1 font-medium text-white">Add Madicine</div>
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}

function errorMessage(message: string) {}

function validateForm(
  madicineName: string,
  madicineChemical: string,
  madicineDosage: string,
  madicinePrice: string,
  madicineExpiry: string
) {
  if (
    !madicineName ||
    !madicineChemical ||
    !madicineDosage ||
    !madicinePrice ||
    !madicineExpiry
  ) {
    return false;
  }
}

async function addMadicine(email: string, password: string) {
  // const response = await fetch('/api/addmadicine', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  // if (await response.ok) {
  //   return true
  // } else {
  //   return false
  // }

  return true
}

// {madicines.map((madicine) => {
//   return (
//     <div className=''>
//       <div>
//         {madicine.name} <br />
//       </div>

//     </div>
//   )}
// )}

export default AddMadicine
