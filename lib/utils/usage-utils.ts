import { StackProps } from "@aws-cdk/core";

/**
 * Adds usage tracking info to the stack props
 * @param usageIdentifier 
 * @param stackProps 
 * @returns 
 */
 export function withUsageTracking(usageIdentifier: string, stackProps?: StackProps): StackProps {
    const result =  stackProps ?? {};
    const trackableDescription = `${result.description?? ""} SSP tracking (${usageIdentifier})`.trimLeft();
    return { ...stackProps, ...{description: trackableDescription}};
}