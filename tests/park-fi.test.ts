import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { MembershipCancelled } from "../generated/schema"
import { MembershipCancelled as MembershipCancelledEvent } from "../generated/ParkFi/ParkFi"
import { handleMembershipCancelled } from "../src/park-fi"
import { createMembershipCancelledEvent } from "./park-fi-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _mIds = [BigInt.fromI32(234)]
    let newMembershipCancelledEvent = createMembershipCancelledEvent(_mIds)
    handleMembershipCancelled(newMembershipCancelledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MembershipCancelled created and stored", () => {
    assert.entityCount("MembershipCancelled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MembershipCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_mIds",
      "[234]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
