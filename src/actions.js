export default (stream, state) => {

    const actions = {

        test: (root) => {

            console.log('Action being called by: ', root);

            if (state().check) {

                stream.push({ check: false });
            }
        }
    };

    return actions;
};
