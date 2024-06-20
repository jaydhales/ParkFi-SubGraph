import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CheckIn } from "../generated/schema"
import { CheckIn as CheckInEvent } from "../generated/ParkFi/ParkFi"
import { handleCheckIn } from "../src/park-fi"
import { createCheckInEvent } from "./park-fi-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id_ = BigInt.fromI32(234)
    let member_ = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCheckInEvent = createCheckInEvent(id_, member_)
    handleCheckIn(newCheckInEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CheckIn created and stored", () => {
    assert.entityCount("CheckIn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CheckIn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "id_",
      "234"
    )
    assert.fieldEquals(
      "CheckIn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "member_",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
