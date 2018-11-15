import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import { fromJS } from 'immutable'
import config from './config'
import moment from 'moment'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
        this.webapi = this.config.webapi
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')

        const pagination = this.metaAction.gf('data.pagination').toJS()
        this.load(pagination)
    }

    load = async (pagination, filter = {}) => {
        const response = await this.webapi.person.query({ pagination, filter })
        response.filter = filter
        this.injections.reduce('load', response)
    }

    getListRowsCount = () => {
        return this.metaAction.gf('data.list').size
    }

    isSelectAll = () => {
        const lst = this.metaAction.gf('data.list')
        if (!lst || lst.size == 0)
            return false

        return lst.every(o => o.get('selected'))
    }

    selectAll = (e) => {
        this.injections.reduce('selectAll', e.target.checked)
    }

    pageChanged = (current, pageSize) => {
        const filter = this.metaAction.gf('data.filter').toJS()
        this.load({ current, pageSize }, filter)
    }

    reportChange = (e) => {
        const pagination = this.metaAction.gf('data.pagination').toJS(),
            filter = this.metaAction.gf('data.filter').toJS()

        filter.report = e.target.value
        this.load(pagination, filter)
    }

    urlChange = (v) => {
        const pagination = this.metaAction.gf('data.pagination').toJS(),
            filter = this.metaAction.gf('data.filter').toJS()

        filter.url = v
        this.load(pagination, filter)
    }

    getDateRange = () => {
        const dateRange = this.metaAction.gf('data.filter.dateRange')
        if (dateRange) {
            return dateRange.toJS()
        }
    }

    dateRangeChange = (dates) => {
        const pagination = this.metaAction.gf('data.pagination').toJS(),
            filter = this.metaAction.gf('data.filter').toJS()

        filter.dateRange = dates
        this.load(pagination, filter)
    }

    clearFilter = () => {
        const pagination = this.metaAction.gf('data.pagination').toJS(),
            filter = {}
        this.load(pagination, filter)
    }

    refresh = () => {
        const pagination = this.metaAction.gf('data.pagination').toJS(),
            filter = this.metaAction.gf('data.filter').toJS()

        this.load(pagination, filter)
    }

    editRow = async (...args) => {
        const { rowIndex } = args.pop()
        const row = this.metaAction.gf(`data.list.${rowIndex}`).toJS()
        
        if(!this.config.apps['mk-app-person-card']){
            throw '依赖mk-app-person-card app,请使用mk clone mk-app-person-card命令添加'
        }

        const ret = await this.metaAction.modal('show', {
            title: '人员',
            children: this.metaAction.loadApp('mk-app-person-card?from=list', {
                store: this.component.props.store,
                personId: row.id,
                isPop:true
            })
        })

        if (ret) {
            this.refresh()
        }
    }

}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}