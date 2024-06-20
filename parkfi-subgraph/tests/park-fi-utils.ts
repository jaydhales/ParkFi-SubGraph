import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CheckIn,
  CheckedOut,
  NewMemberAdded,
  OwnershipTransferred,
  ParkSpaceMinted
} from "../generated/ParkFi/ParkFi"

export function createCheckInEvent(id_: BigInt, member_: Address): CheckIn {
  let checkInEvent = changetype<CheckIn>(newMockEvent())

  checkInEvent.parameters = new Array()

  checkInEvent.parameters.push(
    new ethereum.EventParam("id_", ethereum.Value.fromUnsignedBigInt(id_))
  )
  checkInEvent.parameters.push(
    new ethereum.EventParam("member_", ethereum.Value.fromAddress(member_))
  )

  return checkInEvent
}

export function createCheckedOutEvent(id_: BigInt): CheckedOut {
  let checkedOutEvent = changetype<CheckedOut>(newMockEvent())

  checkedOutEvent.parameters = new Array()

  checkedOutEvent.parameters.push(
    new ethereum.EventParam("id_", ethereum.Value.fromUnsignedBigInt(id_))
  )

  return checkedOutEvent
}

export function createNewMemberAddedEvent(_newMember: Address): NewMemberAdded {
  let newMemberAddedEvent = changetype<NewMemberAdded>(newMockEvent())

  newMemberAddedEvent.parameters = new Array()

  newMemberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_newMember",
      ethereum.Value.fromAddress(_newMember)
    )
  )

  return newMemberAddedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createParkSpaceMintedEvent(
  _tokenid: BigInt,
  _hPrice: BigInt,
  _dPrice: BigInt
): ParkSpaceMinted {
  let parkSpaceMintedEvent = changetype<ParkSpaceMinted>(newMockEvent())

  parkSpaceMintedEvent.parameters = new Array()

  parkSpaceMintedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenid",
      ethereum.Value.fromUnsignedBigInt(_tokenid)
    )
  )
  parkSpaceMintedEvent.parameters.push(
    new ethereum.EventParam(
      "_hPrice",
      ethereum.Value.fromUnsignedBigInt(_hPrice)
    )
  )
  parkSpaceMintedEvent.parameters.push(
    new ethereum.EventParam(
      "_dPrice",
      ethereum.Value.fromUnsignedBigInt(_dPrice)
    )
  )

  return parkSpaceMintedEvent
}
