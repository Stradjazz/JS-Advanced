function solve () {
    
    let currentIdNum = 0;
    const reports = new Map();
    let outputRef = null;
    let sortingMethod = 'ID';
    let comparators = {
        'ID': (a, b) => a[0] - b[0],
        'author': (a, b) => a[1].autor.localeCompare(b[1].author),
        'severity': (a, b) => a[1].severity - b[1].severity
    };
    
    
    function report(author, description, reproducible, severity) {
        let status = 'Open';
        const statusSpan = addElement('span', `${status} | ${severity}`, {className: 'status'});

        const element = addElement('div', [
            addElement('div', addElement('p', description, {className: 'body'})),
            addElement('div', [
                addElement('span', `Submitted by ${author}`, {className: 'author'}),
                statusSpan
            ], {className: 'title'})
        ], {
            id: `report_${currentIdNum}`,
            className: 'report'
        });

        const newReport = {
            ID: currentIdNum,
            author,
            description,
            reproducible,
            severity,
            element //DOM element
        };

        Object.defineProperty(newReport, 'status', {
            get: () => status,
            set: (value) => {
                status = value;
                statusSpan.textContent = `${status} | ${severity}`;
            }
        });
        reports.set(currentIdNum, newReport);
        currentIdNum++;

        render();
        
    }

    function setStatus(id, newStatus) {
        reports.get(id).status = newStatus; 
    }

    function remove(id) {
        reports.get(id).element.remove();
        reports.delete(id);
        render();
    }

    function sort(method) {
        //sort DOM elements
        sortingMethod = method;
        render();
    }
    function output(selector) {
        outputRef = document.querySelector(selector);
        render();
    }

    function render() {
        //valid DOM selector
        if (outputRef !== null) {
            [...reports]
            .sort(comparators[sortingMethod])
            .forEach(([id, r]) => outputRef.appendChild(r.element));
        }
    }

    function addElement(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }
        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }

        return result;
    }

    return {
        report,
        setStatus,
        remove,
        sort,
        output
    };
}