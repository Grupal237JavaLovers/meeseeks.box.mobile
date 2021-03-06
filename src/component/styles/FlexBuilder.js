export default class FlexBuilder {

    constructor() {
        this.accumulator = []
    }

    withFlexValue = (value) => {
        this.accumulator.push({flex: value});
        return this
    };

    withRowFlex = () => {
        this.accumulator.push({flexDirection: "row"});
        return this
    };

    withColumnFlex = () => {
        this.accumulator.push({flexDirection: "column"});
        return this
    };

    withItemAlignment = (value) => {
        this.accumulator.push({alignItems: value});
        return this
    };

    withSelfAlignment = (value) => {
        this.accumulator.push({alignSelf: value});
        return this
    };

    withJustifyContent = (value) => {
        this.accumulator.push({justifyContent: value});
        return this
    };

    withSelfJustify = (value) => {
        this.accumulator.push({justifySelf: value})
        return this;
    }

    build = () => this.accumulator
}