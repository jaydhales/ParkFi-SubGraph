import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MembershipCancelled,
  MembershipMinted,
  MembershipUpgraded,
  OwnershipTransferred,
  ParkFiMembershipNftSet,
  ParkFiMembershipSelected,
  ParkSpaceCheckedOut,
  ParkSpaceMinted,
  ParkSpaceNftSet,
  ParkSpaceSelected
} from "../generated/ParkFi/ParkFi"

export function createMembershipCancelledEvent(
  _mIds: Array<BigInt>
): MembershipCancelled {
  let membershipCancelledEvent = changetype<MembershipCancelled>(newMockEvent())

  membershipCancelledEvent.parameters = new Array()

  membershipCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "_mIds",
      ethereum.Value.fromUnsignedBigIntArray(_mIds)
    )
  )

  return membershipCancelledEvent
}

export function createMembershipMintedEvent(
  membershipId: BigInt,
  member: Address,
  feeTier: i32,
  membershipTier: i32
): MembershipMinted {
  let membershipMintedEvent = changetype<MembershipMinted>(newMockEvent())

  membershipMintedEvent.parameters = new Array()

  membershipMintedEvent.parameters.push(
    new ethereum.EventParam(
      "membershipId",
      ethereum.Value.fromUnsignedBigInt(membershipId)
    )
  )
  membershipMintedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  membershipMintedEvent.parameters.push(
    new ethereum.EventParam(
      "feeTier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(feeTier))
    )
  )
  membershipMintedEvent.parameters.push(
    new ethereum.EventParam(
      "membershipTier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(membershipTier))
    )
  )

  return membershipMintedEvent
}

export function createMembershipUpgradedEvent(
  _mIds: BigInt,
  _feeTier: i32,
  _upgradeTo: i32
): MembershipUpgraded {
  let membershipUpgradedEvent = changetype<MembershipUpgraded>(newMockEvent())

  membershipUpgradedEvent.parameters = new Array()

  membershipUpgradedEvent.parameters.push(
    new ethereum.EventParam("_mIds", ethereum.Value.fromUnsignedBigInt(_mIds))
  )
  membershipUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_feeTier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_feeTier))
    )
  )
  membershipUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_upgradeTo",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_upgradeTo))
    )
  )

  return membershipUpgradedEvent
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

export function createParkFiMembershipNftSetEvent(
  _address: Address
): ParkFiMembershipNftSet {
  let parkFiMembershipNftSetEvent = changetype<ParkFiMembershipNftSet>(
    newMockEvent()
  )

  parkFiMembershipNftSetEvent.parameters = new Array()

  parkFiMembershipNftSetEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return parkFiMembershipNftSetEvent
}

export function createParkFiMembershipSelectedEvent(
  _user: Address,
  _pmnId: BigInt,
  _tokenURI: string
): ParkFiMembershipSelected {
  let parkFiMembershipSelectedEvent = changetype<ParkFiMembershipSelected>(
    newMockEvent()
  )

  parkFiMembershipSelectedEvent.parameters = new Array()

  parkFiMembershipSelectedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  parkFiMembershipSelectedEvent.parameters.push(
    new ethereum.EventParam("_pmnId", ethereum.Value.fromUnsignedBigInt(_pmnId))
  )
  parkFiMembershipSelectedEvent.parameters.push(
    new ethereum.EventParam("_tokenURI", ethereum.Value.fromString(_tokenURI))
  )

  return parkFiMembershipSelectedEvent
}

export function createParkSpaceCheckedOutEvent(
  _psnId: BigInt
): ParkSpaceCheckedOut {
  let parkSpaceCheckedOutEvent = changetype<ParkSpaceCheckedOut>(newMockEvent())

  parkSpaceCheckedOutEvent.parameters = new Array()

  parkSpaceCheckedOutEvent.parameters.push(
    new ethereum.EventParam("_psnId", ethereum.Value.fromUnsignedBigInt(_psnId))
  )

  return parkSpaceCheckedOutEvent
}

export function createParkSpaceMintedEvent(
  _id: BigInt,
  _tokenURI: string
): ParkSpaceMinted {
  let parkSpaceMintedEvent = changetype<ParkSpaceMinted>(newMockEvent())

  parkSpaceMintedEvent.parameters = new Array()

  parkSpaceMintedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  parkSpaceMintedEvent.parameters.push(
    new ethereum.EventParam("_tokenURI", ethereum.Value.fromString(_tokenURI))
  )

  return parkSpaceMintedEvent
}

export function createParkSpaceNftSetEvent(_address: Address): ParkSpaceNftSet {
  let parkSpaceNftSetEvent = changetype<ParkSpaceNftSet>(newMockEvent())

  parkSpaceNftSetEvent.parameters = new Array()

  parkSpaceNftSetEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return parkSpaceNftSetEvent
}

export function createParkSpaceSelectedEvent(
  _psnId: BigInt,
  _user: Address,
  _type: i32,
  _durationCount: BigInt
): ParkSpaceSelected {
  let parkSpaceSelectedEvent = changetype<ParkSpaceSelected>(newMockEvent())

  parkSpaceSelectedEvent.parameters = new Array()

  parkSpaceSelectedEvent.parameters.push(
    new ethereum.EventParam("_psnId", ethereum.Value.fromUnsignedBigInt(_psnId))
  )
  parkSpaceSelectedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  parkSpaceSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type))
    )
  )
  parkSpaceSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "_durationCount",
      ethereum.Value.fromUnsignedBigInt(_durationCount)
    )
  )

  return parkSpaceSelectedEvent
}
