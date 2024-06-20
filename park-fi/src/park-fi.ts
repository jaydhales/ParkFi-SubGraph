import {
  CheckIn as CheckInEvent,
  CheckedOut as CheckedOutEvent,
  NewMemberAdded as NewMemberAddedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ParkSpaceMinted as ParkSpaceMintedEvent
} from "../generated/ParkFi/ParkFi"
import {
  CheckIn,
  CheckedOut,
  NewMemberAdded,
  OwnershipTransferred,
  ParkSpaceMinted
} from "../generated/schema"

export function handleCheckIn(event: CheckInEvent): void {
  let entity = new CheckIn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pfid_ = event.params.pfid_
  entity.member_ = event.params.member_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCheckedOut(event: CheckedOutEvent): void {
  let entity = new CheckedOut(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pfid_ = event.params.pfid_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewMemberAdded(event: NewMemberAddedEvent): void {
  let entity = new NewMemberAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._newMember = event.params._newMember

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleParkSpaceMinted(event: ParkSpaceMintedEvent): void {
  let entity = new ParkSpaceMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenid = event.params._tokenid
  entity._hPrice = event.params._hPrice
  entity._dPrice = event.params._dPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
