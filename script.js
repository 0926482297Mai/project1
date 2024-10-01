document.addEventListener('DOMContentLoaded', function() {
    function updateGate(gateId, logicFunction) {
        const gate = document.getElementById(gateId);
        const input1 = gate.querySelector('input[id$="Input1"]').checked;
        const input2 = gate.querySelector('input[id$="Input2"]').checked;
        const output = gate.querySelector('span[id$="Output"]');
        const light = gate.querySelector('img[id$="Light"]');

        const result = logicFunction(input1, input2);
        output.textContent = result ? '1' : '0';
        light.className = result ? 'on' : 'off';
        light.src = result ? 'img/Light On.png'  : 'img/Light Off.png';
    }

    function andGateLogic(input1, input2) {
        return input1 && input2;
    }

    function orGateLogic(input1, input2) {
        return input1 || input2;
    }

    function nandGateLogic(input1, input2) {
        return !(input1 && input2);
    }

    function norGateLogic(input1, input2) {
        return !(input1 || input2);
    }

    function xorGateLogic(input1, input2) {
        return input1 ^ input2;
    }

    function xnorGateLogic(input1, input2) {
        return !(input1 ^ input2);
    }

    document.querySelectorAll('.gate input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', () => {
            updateGate('andGate', andGateLogic);
            updateGate('orGate', orGateLogic);
            updateGate('xnorGate', xnorGateLogic);
            updateGate('nandGate', nandGateLogic);
            updateGate('norGate', norGateLogic);
            updateGate('xorGate', xorGateLogic);
        });
    });

    // Initial update
    updateGate('andGate', andGateLogic);
    updateGate('orGate', orGateLogic);
    updateGate('xnorGate', xnorGateLogic);
    updateGate('nandGate', nandGateLogic);
    updateGate('norGate', norGateLogic);
    updateGate('xorGate', xorGateLogic);
});
