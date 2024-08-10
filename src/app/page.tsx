"use client";
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";

export default function Page() {
  const bills = [
    { name: 'Electricity', price: 50 },
    { name: 'Gas', price: 30 },
    { name: 'Water', price: 20 },
  ];

  const availableLabels = ['Label 1', 'Label 2', 'Label 3'];
  const [selectedLabels, setSelectedLabels] = useState<String[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">My bills, made simple</h1>

      <p className="mb-4">A simple web app to help you keep track of your bills.</p>

      <h2 className="text-xl font-bold mb-2">All bills:</h2>
      <table className="w-60%">
        <thead>
          <tr>
            <th className="text-left py-2 px-4">Bill</th>
            <th className="text-left py-2 px-4">Price</th>
            <th className="text-left py-2 px-4">Paid</th>
            <th className="text-left py-2 px-4">Labels</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4">{bill.name}</td>
              <td className="py-2 px-4">{bill.price}</td>
              <td className="py-2 px-4">
                <input type="checkbox" id={`bill-${index}`} name={`bill-${index}`} value={`bill-${index}`} className="mr-2" />
                <label htmlFor={`bill-${index}`}>Paid</label>
              </td>
              <td className="py-2 px-4">
                <p>
                  {selectedLabels}
                </p>
                <button onClick={onOpen}>Open Modal</button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                          </p>
                          <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <button color="danger" onClick={onClose}>
                            Close
                          </button>
                          <button color="primary" onClick={onClose}>
                            Action
                          </button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Bill
        </button>
      </div>
    </div>
  )
}
