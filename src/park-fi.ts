import {
  MembershipCancelled as MembershipCancelledEvent,
  MembershipMinted as MembershipMintedEvent,
  MembershipUpgraded as MembershipUpgradedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ParkFiMembershipNftSet as ParkFiMembershipNftSetEvent,
  ParkFiMembershipSelected as ParkFiMembershipSelectedEvent,
  ParkSpaceCheckedOut as ParkSpaceCheckedOutEvent,
  ParkSpaceMinted as ParkSpaceMintedEvent,
  ParkSpaceNftSet as ParkSpaceNftSetEvent,
  ParkSpaceSelected as ParkSpaceSelectedEvent,
} from "../generated/ParkFi/ParkFi";
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
  ParkSpaceSelected,
} from "../generated/schema";

export function handleMembershipCancelled(
  event: MembershipCancelledEvent
): void {
  let entity = new MembershipCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._mIds = event.params._mIds;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMembershipMinted(event: MembershipMintedEvent): void {
  let entity = new MembershipMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.membershipId = event.params.membershipId;
  entity.member = event.params.member;
  entity.feeTier = event.params.feeTier;
  entity.membershipTier = event.params.membershipTier;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMembershipUpgraded(event: MembershipUpgradedEvent): void {
  let entity = new MembershipUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._mIds = event.params._mIds;
  entity._feeTier = event.params._feeTier;
  entity._upgradeTo = event.params._upgradeTo;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleParkFiMembershipNftSet(
  event: ParkFiMembershipNftSetEvent
): void {
  let entity = new ParkFiMembershipNftSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._address = event.params._address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleParkFiMembershipSelected(
  event: ParkFiMembershipSelectedEvent
): void {
  let entity = new ParkFiMembershipSelected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._user = event.params._user;
  entity._pmnId = event.params._pmnId;
  entity._tokenURI = event.params._tokenURI;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleParkSpaceCheckedOut(
  event: ParkSpaceCheckedOutEvent
): void {
  let entity = new ParkSpaceCheckedOut(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._psnId = event.params._psnId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleParkSpaceMinted(event: ParkSpaceMintedEvent): void {
  let entity = new ParkSpaceMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._id = event.params._id;
  entity._tokenURI = event.params._tokenURI;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleParkSpaceNftSet(event: ParkSpaceNftSetEvent): void {
  let entity = new ParkSpaceNftSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._address = event.params._address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleParkSpaceSelected(event: ParkSpaceSelectedEvent): void {
  let entity = new ParkSpaceSelected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._psnId = event.params._psnId;
  entity._user = event.params._user;
  entity._type = event.params._type;
  entity._durationCount = event.params._durationCount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
