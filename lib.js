/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */
function averageGrowthModel (growthModels) {
  if (growthModels.length === 0 || growthModels === undefined) {
    return undefined
  }
  let div = growthModels.length - 1
  let sum = (acc, next) => {
    createGrowthModel(
      acc.lengthToWingspan / div + next.lengthToWingspan / div,
      acc.leavesEatenToWeight / div + next.leavesEatenToWeight / div
  ) }
  // TODO: implement using Array.prototype.reduce()
  return growthModels.reduce(sum, 0)
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
