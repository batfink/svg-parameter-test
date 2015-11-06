var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 100 100');

    var box = this.box = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    box.setAttribute('width', 100);
    box.setAttribute('height', 100);
    box.setAttribute('fill', this.getAttribute('background-color'));

    svg.appendChild(box);
    this.appendChild(svg);

};

proto.attributeChangedCallback = function(attribute, oldValue, newValue) {
    if (attribute === 'background-color') {
        this.box.setAttribute('fill', newValue);
    }
};

var CustomHTMLIcon = document.registerElement('custom-html-icon', {
    prototype: proto
});
