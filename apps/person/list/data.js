export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-person-list',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'mk-app-person-list-header',
			children: [{
				name: 'left',
				component: 'Layout',
				className: 'mk-app-person-list-header-left',
				children: ['报告:', {
					name: 'report',
					component: 'Input',
					placeholder: '请输入报告查询',
					value: '{{data.filter.report}}',
					onChange: '{{$reportChange}}'
				}, 'URL:', {
					name: 'url',
					component: 'Input',
					allowClear: true,
					placeholder: '请输入url查询',
					value: '{{data.filter.url}}',
					onChange: '{{$urlChange}}',
				}, '日期区间:', {
					name: 'dateRange',
					component: 'DatePicker.RangePicker',
					format: 'YYYY-MM-DD',
					value: '{{$getDateRange()}}',
					onChange: '{{$dateRangeChange}}'
				}, '成功状态:', {
					name: 'status',
					component: 'Select',
					showSearch: false,
					value: '{{data.form.status}}',
					onChange: "{{(v)=>$setField('data.form.status', v)}}",
					children: [{
						name: 'all',
						component: 'Select.Option',
						value: '0',
						children: '全部'
					}, {
						name: 'success',
						component: 'Select.Option',
						value: '1',
						children: '成功'
					}, {
						name: 'failed',
						component: 'Select.Option',
						value: '2',
						children: '失败'
					}]
				}, {
					name: 'clear',
					component: 'Button',
					type: 'softly',
					children: '清空条件',
					onClick: '{{$clearFilter}}'
				}]
			}]
		}, {
			name: 'content',
			className: 'mk-app-person-list-content',
			component: 'Layout',
			children: [{
				name: 'dataGrid',
				component: 'DataGrid',
				headerHeight: 35,
				rowHeight: 35,
				enableSequence: true,
				startSequence: '{{(data.pagination.current-1)*data.pagination.pageSize + 1}}',
				rowsCount: "{{$getListRowsCount()}}",
				columns: [{
					name: 'select',
					component: 'DataGrid.Column',
					columnKey: 'select',
					width: 40,
					fixed: true,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: {
							name: 'cb',
							component: 'Checkbox',
							checked: '{{$isSelectAll()}}',
							onChange: '{{$selectAll}}'
						}
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: {
							name: 'checkbox',
							component: 'Checkbox',
							checked: '{{data.list[_rowIndex].selected}}',
							onChange: "{{ (e, option) => $setField('data.list.' + _rowIndex + '.selected', e.target.checked ) }}",
						}
					}
				}, {
					name: 'oprate',
					component: 'DataGrid.Column',
					columnKey: 'oprate',
					fixed: true,
					width: 30,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: ''
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: [{
							name: 'edit',
							component: 'Icon',
							showStyle: 'showy',
							type: 'edit',
							style: {
								fontSize: 18
							},
							title: 'edit',
							onClick: '{{$editRow}}'
						}]
					}
				}, {
					name: 'report',
					component: 'DataGrid.Column',
					columnKey: 'report',
					flexGrow: 1,
					width: 200,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: '报告'
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: '{{data.list[_rowIndex].report}}',
					},
				}, /*{
					name: 'sex',
					component: 'DataGrid.Column',
					columnKey: 'sex',
					width: 50,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: '性别'
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: "{{data.list[_rowIndex].sex == 0? '男': '女'}}",
					}
				},*/ {
					name: 'url',
					component: 'DataGrid.Column',
					columnKey: 'url',
					flexGrow: 1,
					width: 200,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: 'URL'
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: '{{data.list[_rowIndex].url}}',
					},
				}, {
					name: 'date',
					component: 'DataGrid.Column',
					columnKey: 'date',
					flexGrow: 1,
					width: 200,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: '日期'
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: '{{data.list[_rowIndex].date}}',
					},
				}, {
					name: 'status',
					component: 'DataGrid.Column',
					columnKey: 'status',
					flexGrow: 1,
					width: 100,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: '成功状态'
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: '{{data.list[_rowIndex].status}}',
					},
				}, /*{
					name: 'address',
					component: 'DataGrid.Column',
					columnKey: 'address',
					flexGrow: 1,
					width: 200,
					header: {
						name: 'header',
						component: 'DataGrid.Cell',
						children: '地址'
					},
					cell: {
						name: 'cell',
						component: 'DataGrid.Cell',
						_power: '({rowIndex})=>rowIndex',
						children: '{{data.list[_rowIndex].address}}',
					},
				}*/]
			}]
		}, {
			name: 'footer',
			className: 'mk-app-person-list-footer',
			component: 'Layout',
			children: [{
				name: 'pagination',
				component: 'Pagination',
				showSizeChanger: true,
				pageSize: '{{data.pagination.pageSize}}',
				current: '{{data.pagination.current}}',
				total: '{{data.pagination.total}}',
				onChange: '{{$pageChanged}}',
				onShowSizeChange: '{{$pageChanged}}'
			}]
		}]
	}
}


export function getInitState() {
	return {
		data: {
			list: [],
			pagination: { current: 1, total: 0, pageSize: 20 },
			filter: {},
			other: {}
		}
	}
}
