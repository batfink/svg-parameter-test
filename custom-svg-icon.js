var proto = Object.create(SVGElement.prototype);

proto.createdCallback = function() {

    var box = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    box.setAttribute('width', 100);
    box.setAttribute('height', 100);
    box.setAttribute('fill', this.getAttribute('background-color'));

    this.appendChild(box);

};

proto.attributeChangedCallback = function(attribute, oldValue, newValue) {
    if (attribute === 'background-color') {
        box.setAttribute('fill', newValue);
    }
};

var CustomSVGIcon = document.registerElement('custom-svg-icon', {
    prototype: proto,
    extends: 'svg'
});
